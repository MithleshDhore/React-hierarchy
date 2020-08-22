import React from 'react';
import isEmpty from 'lodash/isEmpty';

export const Hierarchy = (props) => {
    return createHierarchy(props.data)
}

const createHierarchy = (data) => {
    return data.map((obj, index) => {
        return (
            <div className="card m-2" key={`${obj.sys_id}_${index}`}>
                <div className="card-header">
                    {obj.name}
                </div>
                <div className={`${!isEmpty(obj.short_description) ? 'card-body' : 'row'}`}>
                    {isEmpty(obj.childNodes) && obj.short_description}
                    {!isEmpty(obj.childNodes) && createHierarchy(obj.childNodes)}
                </div>
            </div>
        )
    })
}