from flask_restful import reqparse, Resource
from models.users import UserModel
from flask_jwt_extended import jwt_required, get_jwt_identity
import json
from flask_apispec import marshal_with, doc, use_kwargs
from flask_apispec.views import MethodResource
from schemas.users import UserRegisterSchema



class UserRegister(MethodResource,Resource):
    
    @doc(description='Rota para se cadastrar.', tags=['Usuários'])
    @use_kwargs(UserRegisterSchema, location=('json'))
    
    def post(self,**kargs):
    
    
        user = UserModel.register(**kargs)
        
        if user:
            if user["message"] == "OK":
                
                


                return user, 200
            else:
                return user, user["status_code"]

            
        return {"message":"Campos invalidos"}, 400