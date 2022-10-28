## chan-ui

### install

To install chan-ui in an existing project as a dependency:

Install with npm:

```
npm i @ckstn0777/chan-ui
```

Install with yarn:

```
yarn add @ckstn0777/chan-ui
```

<br>

### Setting

Provide the client to your App. A good place to put this is in your root component:

```typescript
function App() {
  return (
    <ChanProvider initialTheme="wjtb" initialMode="default">
      ...
    </ChanProvider>
  )
}
```

- initialTheme: 'velo' | 'wjtb' (default: 'wjtb')
- initialMode: 'light' | 'dark' | 'default' (default: 'default')

<br>

### Usage

Here's an example of basic usage:

```typescript
import { Button } from '@ckstn0777/chan-ui'

function Home() {
  return (
    <div>
      <Button>버튼</Button>
    </div>
  )
}
```

You can toggle light, dark mode:

```

```
