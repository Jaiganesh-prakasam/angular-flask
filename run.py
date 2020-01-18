from blueprints import app
from flask_cors import CORS
CORS(app)
app.config.from_object('configurations.DevelopmentConfig')

if __name__ == '__main__':
    app.run()