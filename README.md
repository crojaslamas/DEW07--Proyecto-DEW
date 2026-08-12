# Guía de trabajo en equipo con GitHub

Repositorio: https://github.com/crojaslamas/DEW07--Proyecto-DEW

## Regla de oro

`main` es la versión oficial y siempre debe estar funcionando. **Nadie trabaja directamente en `main`**. Cada integrante trabaja en su propia rama y la une a `main` mediante un **Pull Request (PR)**.

---

## Flujo de trabajo paso a paso

### 1. Baja lo último de `main` (hazlo siempre antes de empezar)

```bash
git checkout main
git pull origin main
```

### 2. Crea tu rama con nombre descriptivo

```bash
git checkout -b feature/lo-que-vas-a-hacer
```

Ejemplos: `feature/carrito`, `feature/footer`, `fix/boton-whatsapp`, `feature/pagina-contacto`.

### 3. Haz tus cambios y guarda tus avances

```bash
# Ver qué cambiaste
git status

# Agregar un archivo específico
git add src/pagina/Inicio.jsx

# O agregar todo lo que cambiaste
git add .

# Guardar con un mensaje claro
git commit -m "Agregué el carrusel en el inicio"
```

> Cada commit = un cambio lógico. Mejor varios commits pequeños que uno gigante.

### 4. Sube tu rama a GitHub

```bash
git push -u origin feature/lo-que-vas-a-hacer
```

### 5. Abre el Pull Request

- Ve a: https://github.com/crojaslamas/DEW07--Proyecto-DEW/compare
- Base: `main`  →  Compare: `tu-rama`
- Haz clic en **Create pull request**, escribe qué hiciste y pide revisión a un compañero.

O más fácil: después del `push`, GitHub te muestra un enlace directo para crear el PR. Cópialo y ábrelo.

### 6. Une tu rama a `main`

Cuando un compañero (o tú) revise el PR, haz clic en **Merge pull request** dentro del PR, o desde la terminal:

```bash
git checkout main
git pull origin main
git merge feature/lo-que-vas-a-hacer
git push origin main
```

---

## Ver los cambios de tu equipo

| Qué quiero ver | Cómo |
|---|---|
| Cambios de un compañero (rama) | `https://github.com/crojaslamas/DEW07--Proyecto-DEW/compare/main...<su-rama>` |
| Un PR específico | Pestaña **Pull requests** → clic en el PR |
| Lo último en `main` | `git pull origin main` |
| Qué hay sin guardar | `git status` |
| Historial | `git log --oneline` |

---

## Solución de problemas comunes

| Problema | Solución |
|---|---|
| Conflicto al hacer merge | Editar los archivos marcados, luego `git add .` y `git commit` |
| `main` cambió mientras trabajaba | `git pull origin main` dentro de tu rama para traer lo nuevo |
| Subí cambios a la rama equivocada | No es grave: abre PR de esa rama a `main` igualmente |
| Me equivoqué en un commit | `git commit --amend -m "mensaje corregido"` (si aún no lo subiste) |
