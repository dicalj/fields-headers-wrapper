## Classes

<dl>
<dt><a href="#Collection">Collection</a></dt>
<dd></dd>
<dt><a href="#Fields">Fields</a> ⇐ <code><a href="#Collection">Collection</a></code></dt>
<dd></dd>
<dt><a href="#Headers">Headers</a> ⇐ <code><a href="#Collection">Collection</a></code></dt>
<dd></dd>
</dl>

<a name="Collection"></a>

## Collection
**Kind**: global class  

* [Collection](#Collection)
    * [new Collection()](#new_Collection_new)
    * _instance_
        * [.collect()](#Collection+collect) ⇒ [<code>Collection</code>](#Collection)
        * [.items()](#Collection+items) ⇒ <code>Array</code>
    * _static_
        * [.init()](#Collection.init) ⇒ [<code>Collection</code>](#Collection)
        * [.reduce([key], [values])](#Collection.reduce) ⇒ <code>Array</code>

<a name="new_Collection_new"></a>

### new Collection()
This class describes a collection or array container using the collect.js library.

<a name="Collection+collect"></a>

### collection.collect() ⇒ [<code>Collection</code>](#Collection)
Initialize a new collect.js instance with the specified items.

**Kind**: instance method of [<code>Collection</code>](#Collection)  
**Returns**: [<code>Collection</code>](#Collection) - collection collect.js instance.  
<a name="Collection+items"></a>

### collection.items() ⇒ <code>Array</code>
Get the raw items of class instance.

**Kind**: instance method of [<code>Collection</code>](#Collection)  
**Returns**: <code>Array</code> - raw items.  
<a name="Collection.init"></a>

### Collection.init() ⇒ [<code>Collection</code>](#Collection)
Return a new items collection instance.

**Kind**: static method of [<code>Collection</code>](#Collection)  
**Returns**: [<code>Collection</code>](#Collection) - items collection.  
<a name="Collection.reduce"></a>

### Collection.reduce([key], [values]) ⇒ <code>Array</code>
Return a new items collection with the specified items identified by name.

**Kind**: static method of [<code>Collection</code>](#Collection)  
**Returns**: <code>Array</code> - fields collection.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [key] | <code>String</code> | <code>name</code> | field option key. |
| [values] | <code>Array</code> | <code>[]</code> | values of field key option. |

<a name="Fields"></a>

## Fields ⇐ [<code>Collection</code>](#Collection)
**Kind**: global class  
**Extends**: [<code>Collection</code>](#Collection)  

* [Fields](#Fields) ⇐ [<code>Collection</code>](#Collection)
    * [new Fields()](#new_Fields_new)
    * [.collect()](#Fields+collect) ⇒ [<code>Collection</code>](#Collection)
    * [.fields()](#Fields+fields) ⇒ <code>Array</code>
    * [.items()](#Collection+items) ⇒ <code>Array</code>

<a name="new_Fields_new"></a>

### new Fields()
This class describes a Fields.

<a name="Fields+collect"></a>

### fields.collect() ⇒ [<code>Collection</code>](#Collection)
This class describes a Fields.

**Kind**: instance method of [<code>Fields</code>](#Fields)  
**Overrides**: [<code>collect</code>](#Collection+collect)  
**Returns**: [<code>Collection</code>](#Collection) - fields collection.  
<a name="Fields+fields"></a>

### fields.fields() ⇒ <code>Array</code>
Define the fields options.

**Kind**: instance method of [<code>Fields</code>](#Fields)  
**Returns**: <code>Array</code> - fields options.  
<a name="Collection+items"></a>

### fields.items() ⇒ <code>Array</code>
Get the raw items of class instance.

**Kind**: instance method of [<code>Fields</code>](#Fields)  
**Returns**: <code>Array</code> - raw items.  
<a name="Headers"></a>

## Headers ⇐ [<code>Collection</code>](#Collection)
**Kind**: global class  
**Extends**: [<code>Collection</code>](#Collection)  

* [Headers](#Headers) ⇐ [<code>Collection</code>](#Collection)
    * [new Headers()](#new_Headers_new)
    * [.collect()](#Headers+collect) ⇒ [<code>Collection</code>](#Collection)
    * [.headers()](#Headers+headers) ⇒ <code>Array</code>
    * [.items()](#Collection+items) ⇒ <code>Array</code>

<a name="new_Headers_new"></a>

### new Headers()
This class describes a Headers.

<a name="Headers+collect"></a>

### headers.collect() ⇒ [<code>Collection</code>](#Collection)
This class describes a Headers.

**Kind**: instance method of [<code>Headers</code>](#Headers)  
**Overrides**: [<code>collect</code>](#Collection+collect)  
**Returns**: [<code>Collection</code>](#Collection) - headers collection.  
<a name="Headers+headers"></a>

### headers.headers() ⇒ <code>Array</code>
Define the headers options.

**Kind**: instance method of [<code>Headers</code>](#Headers)  
**Returns**: <code>Array</code> - headers options.  
<a name="Collection+items"></a>

### headers.items() ⇒ <code>Array</code>
Get the raw items of class instance.

**Kind**: instance method of [<code>Headers</code>](#Headers)  
**Returns**: <code>Array</code> - raw items.  
