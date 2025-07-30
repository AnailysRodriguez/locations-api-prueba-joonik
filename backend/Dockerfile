# Imagen base oficial de PHP con Apache
FROM php:8.3-apache

# Instalar extensiones necesarias para Laravel y PostgreSQL
RUN apt-get update && apt-get install -y \
    git unzip zip libpq-dev libonig-dev libzip-dev curl libcurl4-openssl-dev \
    && docker-php-ext-install pdo pdo_pgsql mbstring zip curl

# Habilitar módulos de Apache necesarios
RUN a2enmod rewrite

# Copiar los archivos del proyecto al contenedor
COPY . /var/www/html

# Establecer directorio de trabajo
WORKDIR /var/www/html

# Establecer permisos apropiados para Laravel
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage /var/www/html/bootstrap/cache

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instalar dependencias de Laravel
RUN composer install --no-dev --optimize-autoloader

# Exponer el puerto 80 (por Apache)
EXPOSE 80

# Comando por defecto (Apache)
CMD ["apache2-foreground"]
