import * as THREE from 'three';
import state from '../state'
import { useState } from 'react';
import { HexColorPicker} from 'react-colorful';

const sharedStyles = {
    height: 50,
    width: 50,
    borderRadius: '50%',
    cursor: 'pointer'
};

const ColorPickerContainer = props => {
    const [color, setColor] = useState('#178BE3');
    if (state.activeMesh && state.activeMesh.material) {
        state.activeMesh.material.color = new THREE.Color(color);
    }
    return (
        <div
            style={{
                position: 'absolute',
                border: "1px solid orange",
                zIndex: 1,
                left: 0,
                right: 0,
                margin: 'auto',
                width: 'fit-content',
                display: 'flex',
                justifySelf: 'end',
                top: '20px'
            }}
        >
            <HexColorPicker 
                color={color} 
                onChange={setColor}
            />;
        </div>
    )
}

export default ColorPickerContainer;
