from flask import Blueprint, jsonify, make_response
import GPUtil

gpu_blueprint = Blueprint(name='gpu', import_name=__name__)

@gpu_blueprint.route('/gpu', methods=['GET'])

def gpu_percent():
 val = GPUtil.showUtilization()
 return make_response(jsonify(
        value=val
    ), 200)
