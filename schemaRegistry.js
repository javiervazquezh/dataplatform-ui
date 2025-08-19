const { SchemaRegistry } = require('@kafkajs/confluent-schema-registry');

const registry = new SchemaRegistry({
  host: process.env.SCHEMA_REGISTRY_URL,
  auth: process.env.SCHEMA_REGISTRY_API_KEY && process.env.SCHEMA_REGISTRY_API_SECRET ? {
    username: process.env.SCHEMA_REGISTRY_API_KEY,
    password: process.env.SCHEMA_REGISTRY_API_SECRET,
  } : undefined,
});

module.exports = { registry };
