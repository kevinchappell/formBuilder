FROM python:3.9-slim-buster

# Set working directory
WORKDIR /usr/src/app

# Copy files
COPY ./docs ./docs
COPY mkdocs.yml .

RUN python -m pip install --upgrade pip
RUN pip install mkdocs

# Expose the listening port
EXPOSE 8123

CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8123"]
