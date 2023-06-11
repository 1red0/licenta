#!/bin/bash

# Wait for Keycloak to start
until $(curl --output /dev/null --silent --head --fail http://localhost:4335); do
    printf '.'
    sleep 5
done

# Keycloak API endpoint
KEYCLOAK_URL="http://localhost:4335"

# Keycloak admin credentials
KEYCLOAK_ADMIN_USERNAME="admin"
KEYCLOAK_ADMIN_PASSWORD="P@ssw0rd"

# Function to create a group
create_group() {
    local group_name=$1
    curl -X POST "${KEYCLOAK_URL}/admin/realms/master/groups" \
        -H "Content-Type: application/json" \
        -k \
        -u "${KEYCLOAK_ADMIN_USERNAME}:${KEYCLOAK_ADMIN_PASSWORD}" \
        -d '{
            "name": "'"$group_name"'"
        }'
}

# Function to create a role
create_role() {
    local role_name=$1
    curl -X POST "${KEYCLOAK_URL}/admin/realms/master/roles" \
        -H "Content-Type: application/json" \
        -k \
        -u "${KEYCLOAK_ADMIN_USERNAME}:${KEYCLOAK_ADMIN_PASSWORD}" \
        -d '{
            "name": "'"$role_name"'"
        }'
}

# Function to assign a role to a group
assign_role_to_group() {
    local role_name=$1
    local group_name=$2
    curl -X POST "${KEYCLOAK_URL}/admin/realms/master/groups/${group_name}/role-mappings/realm" \
        -H "Content-Type: application/json" \
        -k \
        -u "${KEYCLOAK_ADMIN_USERNAME}:${KEYCLOAK_ADMIN_PASSWORD}" \
        -d '[
            {
                "id": "'"$role_name"'",
                "name": "'"$role_name"'",
                "containerId": "master",
                "scopeParamRequired": false
            }
        ]'
}

# Function to create a client
create_client() {
    local client_id=$1
    local root_url=$2
    local home_url=$3
    local redirect_uris=$4
    local post_logout_redirect_uris=$5
    local web_origins=$6
    local admin_url=$7

    curl -X POST "${KEYCLOAK_URL}/admin/realms/master/clients" \
        -H "Content-Type: application/json" \
        -u "${KEYCLOAK_ADMIN_USERNAME}:${KEYCLOAK_ADMIN_PASSWORD}" \
        -k \
        -d '{
            "clientId": "'"$client_id"'",
            "rootUrl": "'"$root_url"'",
            "homeUrl": "'"$home_url"'",
            "redirectUris": ["'"$redirect_uris"'"],
            "webOrigins": ["'"$web_origins"'"],
            "baseUrl": "'"$admin_url"'",
            "standardFlowEnabled": true,
            "implicitFlowEnabled": true,
            "directAccessGrantsEnabled": true,
            "publicClient": true,
            "protocol": "openid-connect",
            "attributes": {}
        }'
}

# Create groups
create_group "admins"
create_group "drivers"

# Create roles
create_role "admin"
create_role "driver"
create_role "user"

# Assign roles to groups
assign_role_to_group "admin" "admins"
assign_role_to_group "user" "admins"
assign_role_to_group "driver" "drivers"
assign_role_to_group "user" "drivers"

# Create client
create_client "monitKars" "http://localhost:4200" "http://localhost:4200/" "http://localhost:4200/*" "http://localhost:4200/*" "*" "http://localhost:4200"

echo "Keycloak configuration script executed successfully!"
