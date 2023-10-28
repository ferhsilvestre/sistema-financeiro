# Build da API
docker build -t financeiroapi .

# Iniciar API
docker run -d --restart always --name FinanceiroAPI -p 0.0.0.0:5001:5001 -v `pwd`:/api financeiroapi:latest