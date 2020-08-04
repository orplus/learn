using System;
using BooksApi.Models;
using BooksApi.Services;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using BooksApi.Models.BooksApi.Models;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;
//using BooksApi.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData.Builder;
using Microsoft.OData.Edm;

namespace BooksApi
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			// requires using Microsoft.Extensions.Options

			services.Configure<BookstoreDatabaseSettings>(
			Configuration.GetSection(nameof(BookstoreDatabaseSettings)));

			services.AddSingleton<IBookstoreDatabaseSettings>(sp =>
				sp.GetRequiredService<IOptions<BookstoreDatabaseSettings>>().Value);

			services.AddSingleton<BookService>();

			services.AddControllers()
				.AddNewtonsoftJson(options => options.UseMemberCasing());
			//OData
			services.AddControllers(mvcOptions => mvcOptions.EnableEndpointRouting = false);
			//Security

			services.AddAuthentication(options =>
			{
				options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
			}).AddJwtBearer(options =>
			{
				options.Authority = "https://orplus-learn.us.auth0.com/";
				options.Audience = "https://localhost:44387/";
			});


			//OData
			services.AddMvc();
			services.AddOData();
			/*services.AddTransient<IAuthorizationHandler, ApiKeyRequirementHandler>();
			services.AddAuthorization(authConfig =>
			{
				authConfig.AddPolicy("ApiKeyPolicy",
					policyBuilder => policyBuilder
						.AddRequirements(new ApiKeyRequirement(new[] { "my-secret-key" })));
			});*/

		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseStaticFiles();

			app.UseHttpsRedirection();

			app.UseRouting();


			app.UseAuthorization();

			app.UseAuthentication();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});

			/*app.UseMvc(routeBuilder =>
			{
				routeBuilder.Select().Filter().Expand();
				routeBuilder.MapODataServiceRoute("odata", "odata", GetEdmModel());

			});*/

			var builder = new ODataConventionModelBuilder(app.ApplicationServices);

			builder.EntitySet<Book>("Books");

			app.UseMvc(routeBuilder =>
			{
				// and this line to enable OData query option, for example $filter
				routeBuilder.Select().Expand().Filter().OrderBy().MaxTop(100).Count();

				routeBuilder.MapODataServiceRoute("ODataRoute", "odata", builder.GetEdmModel());

				// uncomment the following line to Work-around for #1175 in beta1
				routeBuilder.EnableDependencyInjection();
			});
		}
	}
}
