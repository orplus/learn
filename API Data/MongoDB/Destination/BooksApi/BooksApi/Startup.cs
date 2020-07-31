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
using BooksApi.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;

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
		}
	}
}
