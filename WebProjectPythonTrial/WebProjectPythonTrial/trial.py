from flask import Flask

trial = Flask(__name__)

@trial.route('/')
@trial.route('/home')

def home():
    return "Python Trial"

if __name__ == '__main__':
    trial.run('localhost',8080)
