# [Дизайн-система Consta](http://consta.design/) | Stats

Компонент для отображения чисел, например, на графиках, входит в [дизайн-систему Consta](https://github.com/consta-design-system/). Подходит, чтобы красиво показывать числа для статистики.

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/stats
# Yarn
$ yarn add @consta/stats
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](http://consta.design/libs/portal/theme-themeabout).

### Можно использовать компоненты

Например, так:

```js
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Stats } from '@consta/Stats';
const SomeComponent = () => (
  <Stats
    value={2170}
    title="Молний за год"
    unit="разрядов"
    rate="20%"
    iconArrowRate
    status="success"
  />
);
```

## Документация

[Посмотреть документацию и примеры](http://consta.design/libs/stats)

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Запуск локального сервера для разработки
$ yarn start

# Сборка пакета
$ yarn build

# Сборка стенда
$ yarn stand:build

# Запуск тестов
$ yarn test
```

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta.design/libs/portal/contributers-code).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется на условиях открытой [лицензии MIT](https://consta.design/static/licence_mit.pdf).
