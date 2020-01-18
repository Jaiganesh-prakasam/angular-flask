from flask import Flask
app = Flask(__name__)
from blueprints.cpu.cpu import cpu_blueprint
from blueprints.gpu.gpu import gpu_blueprint
from blueprints.ram.ram import ram_blueprint

app.register_blueprint(cpu_blueprint)
app.register_blueprint(gpu_blueprint)
app.register_blueprint(ram_blueprint)