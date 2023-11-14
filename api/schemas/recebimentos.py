from marshmallow import Schema, fields

class RecebimentoRegisterSchema(Schema):
    user_id = fields.Str(required=True)
    descricao = fields.Str(required=True)
    valor = fields.Float(required=True)
    data = fields.Str(required=True)