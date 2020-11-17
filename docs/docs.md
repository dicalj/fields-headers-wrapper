# docs

## Classes

[Collection](docs.md#Collection)[Fields](docs.md#Fields) ⇐ [`Collection`](docs.md#Collection)[Headers](docs.md#Headers) ⇐ [`Collection`](docs.md#Collection)

## Collection

**Kind**: global class

* [Collection](docs.md#Collection)
  * [new Collection\(\)](docs.md#new_Collection_new)
  * _instance_
    * [.collect\(\)](docs.md#Collection+collect) ⇒ [`Collection`](docs.md#Collection)
    * [.items\(\)](docs.md#Collection+items) ⇒ `Array`
  * _static_
    * [.init\(\)](docs.md#Collection.init) ⇒ [`Collection`](docs.md#Collection)
    * [.reduce\(\[key\], \[values\]\)](docs.md#Collection.reduce) ⇒ `Array`

### new Collection\(\)

This class describes a collection or array container using the collect.js library.

### collection.collect\(\) ⇒ [`Collection`](docs.md#Collection)

Initialize a new collect.js instance with the specified items.

**Kind**: instance method of [`Collection`](docs.md#Collection)  
**Returns**: [`Collection`](docs.md#Collection) - collection collect.js instance.  


### collection.items\(\) ⇒ `Array`

Get the raw items of class instance.

**Kind**: instance method of [`Collection`](docs.md#Collection)  
**Returns**: `Array` - raw items.  


### Collection.init\(\) ⇒ [`Collection`](docs.md#Collection)

Return a new items collection instance.

**Kind**: static method of [`Collection`](docs.md#Collection)  
**Returns**: [`Collection`](docs.md#Collection) - items collection.  


### Collection.reduce\(\[key\], \[values\]\) ⇒ `Array`

Return a new items collection with the specified items identified by name.

**Kind**: static method of [`Collection`](docs.md#Collection)  
**Returns**: `Array` - fields collection.

| Param | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| \[key\] | `String` | `name` | field option key. |
| \[values\] | `Array` | `[]` | values of field key option. |

## Fields ⇐ [`Collection`](docs.md#Collection)

**Kind**: global class  
**Extends**: [`Collection`](docs.md#Collection)

* [Fields](docs.md#Fields) ⇐ [`Collection`](docs.md#Collection)
  * [new Fields\(\)](docs.md#new_Fields_new)
  * [.collect\(\)](docs.md#Fields+collect) ⇒ [`Collection`](docs.md#Collection)
  * [.fields\(\)](docs.md#Fields+fields) ⇒ `Array`
  * [.items\(\)](docs.md#Collection+items) ⇒ `Array`

### new Fields\(\)

This class describes a collection of fields used for forms or other situations that require input fields.

### fields.collect\(\) ⇒ [`Collection`](docs.md#Collection)

Initialize a new collect.js instance with the specified fields.

**Kind**: instance method of [`Fields`](docs.md#Fields)  
**Overrides**: [`collect`](docs.md#Collection+collect)  
**Returns**: [`Collection`](docs.md#Collection) - collection collect.js instance.  


### fields.fields\(\) ⇒ `Array`

Get the raw fields items of class instance.

**Kind**: instance method of [`Fields`](docs.md#Fields)  
**Returns**: `Array` - raw items.  


### fields.items\(\) ⇒ `Array`

Get the raw items of class instance.

**Kind**: instance method of [`Fields`](docs.md#Fields)  
**Returns**: `Array` - raw items.  


## Headers ⇐ [`Collection`](docs.md#Collection)

**Kind**: global class  
**Extends**: [`Collection`](docs.md#Collection)

* [Headers](docs.md#Headers) ⇐ [`Collection`](docs.md#Collection)
  * [new Headers\(\)](docs.md#new_Headers_new)
  * [.collect\(\)](docs.md#Headers+collect) ⇒ [`Collection`](docs.md#Collection)
  * [.headers\(\)](docs.md#Headers+headers) ⇒ `Array`
  * [.items\(\)](docs.md#Collection+items) ⇒ `Array`

### new Headers\(\)

This class describes a collection of headers used for tables or other situations that require columns headers.

### headers.collect\(\) ⇒ [`Collection`](docs.md#Collection)

Initialize a new collect.js instance with the specified headers.

**Kind**: instance method of [`Headers`](docs.md#Headers)  
**Overrides**: [`collect`](docs.md#Collection+collect)  
**Returns**: [`Collection`](docs.md#Collection) - collection collect.js instance.  


### headers.headers\(\) ⇒ `Array`

Get the raw headers items of class instance.

**Kind**: instance method of [`Headers`](docs.md#Headers)  
**Returns**: `Array` - raw items.  


### headers.items\(\) ⇒ `Array`

Get the raw items of class instance.

**Kind**: instance method of [`Headers`](docs.md#Headers)  
**Returns**: `Array` - raw items.

