import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Context } from '..'

const BrandBar = observer(() => {
    const {device} = useContext(Context)

  return (
    <Container className="d-flex flex-wrap">
        {device.brands.map(brand => 
            <Card
                style={{cursor: 'pointer', minWidth:100, textAlign:'center'}}
                key={brand.id}
                className="p-2"
                onClick={() => device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id? 'primary' : 'light'}
            >
                {brand.name}
            </Card>
            )}
    </Container>
  )
})

export default BrandBar