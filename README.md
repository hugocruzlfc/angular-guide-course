# Angular Course

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## 🧠 🏗️ Arquitectura PRO (Angular 17+ / 18+ Standalone)

### 📦 Estructura global

```bash
src/
│
├── app/
│   ├── core/
│   ├── shared/
│   ├── features/
│   ├── layouts/
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── app.component.ts
│
├── assets/
├── environments/
├── styles/
└── main.ts
```

### ⚡ 1. Core (infra global)

```bash
core/
├── http/
│   └── api-client.ts
├── interceptors/
├── guards/
├── auth/
├── platform/
├── utils/
└── providers.ts
```

### 🧩 2. Shared (UI + utilidades puras)

```bash
shared/
├── ui/
│   ├── button/
│   ├── modal/
│   ├── input/
│   └── spinner/
│
├── directives/
├── pipes/
├── utils/
└── types/
```

### 🚀 3. Features (arquitectura real de producto)

```bash
features/
├── auth/
├── dashboard/
├── users/
├── products/
└── orders/
```

### 🧠 Dentro de cada feature (standalone-first)

```bash
orders/
├── pages/
│   ├── orders-list.page.ts
│   ├── order-detail.page.ts
│
├── components/
│   ├── order-card/
│   └── order-table/
│
├── data-access/
│   ├── orders.api.ts
│   ├── orders.store.ts   (signals store)
│   └── orders.model.ts
│
├── utils/
├── orders.routes.ts
└── index.ts
```

### ⚡ 4. Routing moderno (lazy by feature)

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: "orders",
    loadChildren: () => import("./features/orders/orders.routes").then((m) => m.ORDERS_ROUTES),
  },
];
```

### 🧠 Dentro de feature routing

```typescript
// features/orders/orders.routes.ts
export const ORDERS_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/orders-list.page").then((m) => m.OrdersListPage),
  },
  {
    path: ":id",
    loadComponent: () => import("./pages/order-detail.page").then((m) => m.OrderDetailPage),
  },
];
```

### 🧪 5. State management (SIGNALS era)

```bash
data-access/
├── orders.store.ts   <-- signals store
├── orders.api.ts
└── orders.model.ts
```

### 🏗️ 6. Core providers (Angular 17+ style)

```typescript
// core/providers.ts
export const appProviders = [provideHttpClient(), provideRouter(routes)];
```

### 🎨 7. Layout system (muy importante en apps reales)

```bash
layouts/
├── main/
│   ├── main.layout.ts
│   └── main-shell.component.ts
│
├── auth/
│   ├── auth.layout.ts
│   └── auth-shell.component.ts

```
