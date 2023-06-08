# forked from braft-convert

## 只支持React 16.3 及以上

### 与braft-editor搭配使用的数据转换工具

##### 使用方法

```bash
# use yarn
yarn add braft-convert-2
# use npm
npm install --save braft-convert-2
```

```javascript
import { convertRawToHTML, convertHTMLToRaw } from 'braft-convert-2'

const draftRawData = '{"blocks":[{"key":"9hu83","text":"Hello World!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}'
const htmlString = '<p>Hello <strong><span style="color:#f32784">World</span></strong>!</p>'

convertRawToHTML(JSON.parse(draftRawData))
// <p>Hello <strong><span style="color:#f32784">World</span></strong>!</p>

JSON.stringify(convertHTMLToRaw(htmlString))
// {"blocks":[{"key":"8v6eh","text":"Hello World!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}

```
