# common-css  

## 简介  
common-css是一个常用css样式库，使用scss编写，灵感来源于[vuetify](https://vuetifyjs.com/zh-Hans/getting-started/installation/).  

## 使用  
### npm
> npm install common-css  
### download
> https://github.com/dodododooo/common.css
## 自定义

|  变量名称  |    说明    |  类型  |  默认值  |
|   ----   |    ----    |  ----  |  ----  |
| $spacer-base  | padding和margin的基准值 | number | 4px |
| $spacer-range  | padding和margin范围* | number | 16 |
| $spacers  | 自定义padding和margin值 | map | () |
| $radius-base  | border-radius基准值 | number | 4px |
| $radius | 自定义radius值 | map | () |
| $size-precent-base| height和width基准值 | number | 10 |
| $size-precent  | 自定义height和width | map | () |
| $font-size-base  | font-size基准值 | number | 2 |
| $font-size-range  | font-size范围* | number | 16 |
| $font-size  | 自定义font-size | map | () |
| $font-weights  | 自定义font-weight | map | () |
| $colors  | 自定义color | map | () |
| $border-color-deafult  | 默认border颜色 | color | var(--color-light) |
| $propertys  | 自定义属性 | map | () |

> padding和margin的生成范围为 $spacer-base * $spacer-range 详见 _variables.scss  
> font-size的生成范围为 $font-size-range * font-size-range 详见 _variables.scss  


