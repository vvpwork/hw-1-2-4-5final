import React from 'react';

const withProps = newProps => WrapComponent => {
    return  () => <WrapComponent {...newProps} /> 
 
}
export default withProps;
