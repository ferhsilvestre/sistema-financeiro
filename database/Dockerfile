FROM mysql:8.0.21

ENV MYSQL_ROOT_PASSWORD=senha_root
ENV MYSQL_DATABASE=nome_do_banco

COPY sistema_financeiro.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
