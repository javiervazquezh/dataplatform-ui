# Data Platform UI

A minimal streaming data portal that lets you define and search for data products. It also integrates with the Confluent Cloud Schema Registry.

## Setup

```bash
npm install
```

## Running

Set the following environment variables for Schema Registry access:

- `SCHEMA_REGISTRY_URL`
- `SCHEMA_REGISTRY_API_KEY`
- `SCHEMA_REGISTRY_API_SECRET`

Then start the server:

```bash
npm start
```

Visit `http://localhost:3000` for the simple web interface.

## API

- `POST /data-products` – create a data product with arbitrary metadata.
- `GET /data-products?q=term` – search data products by name.
- `GET /schemas/:id` – fetch a schema from Confluent Cloud Schema Registry.

## Testing

```bash
npm test
```
