# React enhance state [🪝 hooks]

A set of react state's utilities to enable new __behaviors__ and facilitate complex state manipulations.

#### Hooks:

* useUpdateState
* useUpdateStateByKey
* useStrictUpdateState

## Installation

```bash
npm i react-enhance-state
```

## Usage:

All state enhancers we provide are designed to be minimal and simple, without any configuration.

#### useUpdateState:

```javascript
// ...
{
    const [state, setState] = useState({
        firstName: "john", 
        lastName: "", 
    });

    const updateState = useUpdateState(state, setState);
    
    onClickHandler = () => {
        updateState({ lastName: "Doe" });
        /** 
         * "updateState" won't override old state, instead it will update only the properties of the
         * object passed as argument.
         * p.s. in case of a property is not defined on the previous state, "updateState" automatically
         * insert it into the new state.
         */
    }
    
    // ...
}
```

#### useUpdateStateByKey:

```javascript
// ...
{
    const [state, setState] = useState({
        firstName: "john", 
        lastName: "", 
    });

    const updateStateByKey = useUpdateStateByKey(state, setState);
    
    onClickHandler = () => {
        updateStateByKey("lastName", "Doe");
        /** 
         * "updateStateByKey" won't override old state, instead it will update only the properties relative to
         * the first passed argument by the value passed as the second argument.
         * p.s. in case of a property is not defined on the previous state, "updateStateByKey" automatically
         * insert it into the new state.
         */
    }
    
    // ...
}
```


#### useStrictUpdateState:

As its name indicate, this hook is quite similar to the previous hooks mentioned "updateState" in usage
and update handling behavior. The main difference between them, is that "strictUpdateState" is by default
take it seriously about respecting the state type definition. So, by using this "strictUpdateState"
you'll ensure that your state schema can't change.

```javascript
// ...
{
    const [state, setState] = useState({
        firstName: "john", 
        lastName: "", 
    });

    const strictUpdateState = useStrictUpdateState(state, setState);
    
    onClickHandler = () => {
        strictUpdateState({ lastName: "Doe" });
        /**
         * "strictUpdateState" won't override old state, instead it will update only the properties of the
         * object passed as argument.
         * p.s. "strictUpdateState" can not accept any property that hasn't declared in the state type or the
         * initial state value.
         */
    }
    
    // ...
}
```

