import React, { useState } from "react";
import { Input } from '@nutui/nutui-react';

const App = () => {
    const [value, UpdateValue] = useState('')
    return (
        <>
            <Input  type='number' label="文本" defaultValue={value} placeholder="文本" onChange={(val) => {
                UpdateValue(Number(val) > 123 ? 123 : val)
            }} />
        </>
    );
};
export default App;