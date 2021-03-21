import React from 'react'
import { useHistory } from 'react-router-dom'
import { Tooltip, Button } from 'antd'
import { EyeOutlined } from '@ant-design/icons'

import Space from '~/shared/Space'
import Table from '~/shared/Table'

function UserListComponent(props) {
    const history = useHistory()

    function view(name) {
        history.push(`/pokemon/view/${name}`)
    }

    function renderActions(row) {
        const { name } = row

        return (
            <Button.Group>
                <Tooltip title="Visualizar">
                    <Button
                        type="link"
                        icon={<EyeOutlined />}
                        onClick={() => view(name)}
                    />
                </Tooltip>
            </Button.Group>
        )
    }

    const columns = [
        {
            title: 'Pokémon',
            dataIndex: 'name',
        },
        {
            title: 'Ações',
            align: 'center',
            render: (row) => renderActions(row),
        },
    ]

    return (
        <Space direction="vertical">
            <Table baseURL="/pokemon" columns={columns} />
        </Space>
    )
}

export default UserListComponent
