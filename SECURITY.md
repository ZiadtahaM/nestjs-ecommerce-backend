# Security Policy

## Supported source branch

Security fixes should be prepared against the current default branch. Never report or commit passwords, JWTs, payment data, database credentials, customer records, or deployment configuration in public channels.

## Reporting a vulnerability

Report a vulnerability privately to the repository owner with the affected endpoint or module, reliable reproduction steps, impact, and an appropriate remediation proposal. Please allow time to assess and correct the issue before public disclosure.

## Secure deployment baseline

Set secrets through the hosting provider, not source files. Enforce authentication and authorization on API routes, validate request payloads, maintain rate limits where appropriate, and run the NestJS build and test suite before each deployment.

