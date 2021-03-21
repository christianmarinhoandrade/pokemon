import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
    Row,
    Col,
    Form,
    Input,
    Divider,
    Button,
    Card,
    Avatar,
    Image,
} from 'antd'

import selector from '../store/pokemon.selector'

import Space from '~/shared/Space'
import Table from '~/shared/TableWithoutPagination'

function PokemonFormComponent(props) {
    const { name, img } = props

    const { pokemon } = selector
    const pokemonSelector = useSelector(pokemon)
    const { data } = pokemonSelector

    const [abilities, setAbilities] = useState([])
    const [status, setStatus] = useState([])

    useEffect(() => {
        form.setFieldsValue(data)

        console.log(data)

        const abilities = data.abilities?.map((item) => {
            return { ability: item.ability.name }
        })

        const status = data.stats?.map((item) => {
            return { status: item.stat.name, value: item.base_stat }
        })

        setAbilities(abilities)
        setStatus(status)
    }, [data])

    const [form] = Form.useForm()

    return (
        <Form form={form} layout="vertical">
            <Card
                size="small"
                title={
                    <>
                        <Avatar size={64} src={img} />
                        {name}
                    </>
                }
                bordered={false}
            >
                <Row gutter={16}>
                    <Col xs={24} md={2}>
                        <Form.Item name="name" label="Nome">
                            <Input maxLength={50} disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={5}>
                        <Form.Item
                            name="base_experience"
                            label="A experiência obtida ao derrotar este Pokémon"
                        >
                            <Input maxLength={50} disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={5}>
                        <Form.Item
                            name="height"
                            label="A altura deste Pokémon em decímetros"
                        >
                            <Input maxLength={50} disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={2}>
                        <Form.Item name="order" label="Ordem">
                            <Input maxLength={50} disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={5}>
                        <Form.Item
                            name="weight"
                            label="O peso deste Pokémon em hectogramas"
                        >
                            <Input maxLength={50} disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24}>
                        <Card
                            size="small"
                            title={'Habilidades'}
                            bordered={true}
                        >
                            <Space direction="vertical">
                                <Table
                                    results={abilities}
                                    columns={[
                                        {
                                            title: 'Habilidade',
                                            dataIndex: 'ability',
                                        },
                                    ]}
                                />
                            </Space>
                        </Card>
                    </Col>
                    <label>&nbsp;</label>
                    <Col xs={24} md={24}>
                        <Card size="small" title={'Status'} bordered={true}>
                            <Space direction="vertical">
                                <Table
                                    results={status}
                                    columns={[
                                        {
                                            title: 'Status',
                                            dataIndex: 'status',
                                        },
                                        {
                                            title: 'Valor',
                                            dataIndex: 'value',
                                        },
                                    ]}
                                />
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Card>

            <Divider />

            <Row justify="end">
                <Button type="primary">
                    <Link to="/">Voltar</Link>
                </Button>
            </Row>
        </Form>
    )
}

export default PokemonFormComponent
