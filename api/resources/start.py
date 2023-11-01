import json

from flask_apispec import doc, marshal_with
from flask_apispec.views import MethodResource
from flask_restful import Resource, reqparse
from marshmallow import Schema, fields


class StartResponseSchema(Schema):
    name = fields.Str(default='')
    version = fields.Str(default='')
    description = fields.Str(default='')
    authors = fields.List(fields.Str(default=''))


class Start(MethodResource):
    @doc(description='Demonstra informações sobre a API.', tags=['Home'])
    @marshal_with(StartResponseSchema)
    def get(self):

        return {
            "name": "API CONTROLE FINANCEIRO",
            "version": "1.0",
            "authors": [
                "Davi Antonaji",
                "Eduardo Oliveira Fernandes",
                "Felipe Cesar Silva Cuba",
                "Fernando Silvestre",
                "João Victor dos Santos Martins",
                "Luis Felipe Garção Silva",
                "Rafael Batista",
                "Vitor Salesi",
                "Vivian de Carvalho Teixeira"
            ],
            "description": "API DO SISTEMA DE CONTROLE FINANCEIRO"
        }, 200
