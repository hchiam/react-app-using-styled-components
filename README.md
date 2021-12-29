# To recreate from scratch:

```sh
npx create-react-app react-app; cd react-app; npm install --save styled-components; npm install --save-dev babel-plugin-styled-components; npm run start;
```

Then edit styles.

Make sure to change `import styled from 'styled-components'` to be `import styled from 'styled-components/macro'` instead.
