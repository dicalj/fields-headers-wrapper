## Classes

<dl>
<dt><a href="#Collection">Collection</a></dt>
<dd></dd>
<dt><a href="#Fields">Fields</a></dt>
<dd></dd>
<dt><a href="#Headers">Headers</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#collect">collect()</a> ⇒ <code><a href="#Collection">Collection</a></code></dt>
<dd><p>This class describes a Fields.</p>
</dd>
<dt><a href="#fields">fields()</a> ⇒ <code>Array</code></dt>
<dd><p>Define the fields options.</p>
</dd>
<dt><a href="#collect">collect()</a> ⇒ <code><a href="#Collection">Collection</a></code></dt>
<dd><p>This class describes a Headers.</p>
</dd>
<dt><a href="#headers">headers()</a> ⇒ <code>Array</code></dt>
<dd><p>Define the headers options.</p>
</dd>
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

## Fields
**Kind**: global class  
<a name="new_Fields_new"></a>

### new Fields()
This class describes a Fields.

<a name="Headers"></a>

## Headers
**Kind**: global class  
<a name="new_Headers_new"></a>

### new Headers()
This class describes a Headers.

<a name="collect"></a>

## collect() ⇒ [<code>Collection</code>](#Collection)
This class describes a Fields.

**Kind**: global function  
**Returns**: [<code>Collection</code>](#Collection) - fields collection.  
<a name="fields"></a>

## fields() ⇒ <code>Array</code>
Define the fields options.

**Kind**: global function  
**Returns**: <code>Array</code> - fields options.  
<a name="collect"></a>

## collect() ⇒ [<code>Collection</code>](#Collection)
This class describes a Headers.

**Kind**: global function  
**Returns**: [<code>Collection</code>](#Collection) - headers collection.  
<a name="headers"></a>

## headers() ⇒ <code>Array</code>
Define the headers options.

**Kind**: global function  
**Returns**: <code>Array</code> - headers options.  
