# MonitKars - Sistem de management pentru autovehicule

## Structură

```text
.
├── backend
|   ├── monitKars
|   └── Dockerfile_backend
├── frontend
|   ├── monitKars
|   ├── Dockerfile_frontend
|   └── nginx_angular.conf
|
├── docker-compose.yaml
└── README.md
```

## Pentru a porni proiectul este nevoie de:

Codul sursă și Docker instalat

## Pornirea proiectului

În interiorul fișierului rădăcină se rulează cu ajutorul terminalului următoarea comandă: `docker-compose up` sau `docker-compose up -d` (pentru a rula proiectul în fundal)

`docker-compose build --no-cache` -> pentru a construi imaginile fară cache
`docker-compose up -d --force-recreate --no-deps --build` -> pentru a porni proiectul fără dependințe, și pentru a construi imaginile din cu ajutorul codului sursă dacă s-au efectuat modificări în acesta, în fundal

## Bazele de date au fost impartite in doua instante
