from flask import Blueprint, jsonify, make_response
import psutil

cpu_blueprint = Blueprint(name='cpu', import_name=__name__)

@cpu_blueprint.route('/', methods=['GET'])
@cpu_blueprint.route('/cpu', methods=['GET'])
def cpu_percent():
 val = psutil.cpu_percent(interval=1)
 return make_response(jsonify(
        value=val
    ), 200)