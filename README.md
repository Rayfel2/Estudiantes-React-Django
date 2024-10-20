# Sistema de Gestión Académica

## Descripción

Este proyecto es una aplicación web diseñada para manejar los procesos académicos de la universidad, permitiendo la interacción entre estudiantes, profesores y administradores. La aplicación está enfocada en la gestión eficiente de asignaturas, calificaciones y usuarios, asegurando un flujo de información claro y accesible.

## Características

- **Gestión de Entidades**: La aplicación permite realizar operaciones de Insertar, Modificar, Consultar y Eliminar para las siguientes entidades:
  - **Estudiantes**: Información almacenada incluye ID, Nombre y Carrera.
  - **Asignaturas**: Detalles sobre Clave, Nombre, Créditos y Profesores asignados.
  - **Calificaciones**: Capturadas de forma numérica con conversión automática a letras, de acuerdo al siguiente rango:
    - A: 90 - 100
    - B: 80 - 89
    - C: 70 - 79
    - D: 60 - 69
    - F: ≤ 59

- **Ranking Académico**: El sistema genera un reporte o lista de todos los estudiantes registrados, mostrando sus índices académicos calculados y presentándolos en orden de ranking de mayor a menor puntuación.

## Tecnologías

- **Backend**: Django
- **Frontend**: React

## Colaboradores

- Axel Castillo
- Manuel Mancebo
- Rayfel Ogando
- Rómulo Pérez

### Supervisor

- Ing. Omar Núñez

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/SistemaGestionAcademica.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd SistemaGestionAcademica
   ```

3. Crea un entorno virtual y actívalo:
   ```bash
   python -m venv env
   source env/bin/activate  # En macOS/Linux
   env\Scripts\activate  # En Windows
   ```

4. Instala las dependencias del backend:
   ```bash
   pip install -r requirements.txt
   ```

5. Navega al directorio del frontend:
   ```bash
   cd frontend
   ```

6. Instala las dependencias del frontend:
   ```bash
   npm install
   ```

7. Configura la base de datos en `settings.py` y realiza las migraciones:
   ```bash
   python manage.py migrate
   ```

8. Inicia el servidor de desarrollo:
   ```bash
   python manage.py runserver
   ```

9. En una nueva terminal, inicia la aplicación frontend:
   ```bash
   npm start
   ```

## Uso

La aplicación permite a los usuarios interactuar con el sistema de gestión académica a través de una interfaz intuitiva. Asegúrate de consultar la documentación adicional para obtener más detalles sobre el uso de cada funcionalidad.
