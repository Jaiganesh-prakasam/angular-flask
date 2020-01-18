from flask import render_template, Blueprint, jsonify, make_response
import psutil

ram_blueprint = Blueprint(name='ram', import_name=__name__)

@ram_blueprint.route('/ram', methods=['GET'])
def ram_percent():
 val = psutil.virtual_memory()
 return make_response(jsonify(
        value=val.percent
    ), 200)