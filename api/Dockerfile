FROM python:3.7.7-slim-buster

WORKDIR '/api'
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .

EXPOSE 5001

CMD ["python3", "app.py"]