# 
FROM composer:latest as vendor

RUN mkdir -p /my_dir/

COPY ./ /my_dir/

WORKDIR /my_dir/

RUN composer install
# 

# 
FROM node:latest as frontend

COPY --from=vendor /my_dir/ /my_dir/

WORKDIR /my_dir/

RUN npm install

RUN npx mix
# 

# 
FROM php:7.4-apache

RUN apt update && apt install -y \
        git apache2 lynx nano ssh libpng-dev libmagickwand-dev libjpeg-dev \
        libmemcached-dev zlib1g-dev libzip-dev unzip subversion ca-certificates \
        libicu-dev libxml2-dev libmcrypt-dev bash \
        zlib1g-dev \
        libxml2-dev \
        libzip-dev \
        libonig-dev \
        zip \
        curl \
        unzip \
        git \
        && docker-php-ext-configure gd \
        && docker-php-ext-install -j$(nproc) gd \
        && docker-php-ext-install pdo_mysql mbstring exif pcntl \
        && docker-php-source delete \
        php7.4-common php7.4-mysql php7.4-xml \
        php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick \
        php7.4-cli php7.4-dev php7.4-imap php7.4-mbstring php7.4-opcache \
        php7.4-soap php7.4-zip php7.4-intl


RUN apt-get clean && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-configure intl
RUN a2enmod rewrite

COPY --from=frontend /my_dir/ /var/www/html

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN chmod +rwx /var/www/html
RUN chmod -R 777 /var/www/html

WORKDIR /var/www/html

RUN php artisan cache:clear
RUN php artisan view:clear
RUN php artisan route:clear

RUN php artisan migrate

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
