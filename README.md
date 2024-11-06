# Локальный запуск

1. Установите все зависимости

```bash
npm install
```

2. Запустите проект в режим разработки

```bash
npm run dev
```

3. Клиент доступен по адресу

```bash
http://localhost:9000/
```

## Сборка apk

1. Добавление capacitor

```bash
quasar mode add capacitor
```

2. Сборка apk

```bash
quasar build -m capacitor -T android
```
