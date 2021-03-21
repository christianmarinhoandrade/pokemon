/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import { Table } from 'antd'
import qs from 'qs'

import api from '~/services/api'

function SharedTable(props) {
    const [loading, setLoading] = useState(false)

    const [dataSource, setDataSource] = useState({ results: [] })

    const [pagination, setPagination] = useState({
        offset: 0,
        limit: 10,
    })

    const { baseURL, columns } = props

    const getDataSource = useCallback(async (offset, limit) => {
        setLoading(true)

        const response = await api.get(baseURL, {
            params: { offset: !offset ? 0 : offset * limit, limit },
            paramsSerializer(params) {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            },
        })

        setLoading(false)
        setDataSource(response.data)
    }, [])

    useEffect(() => {
        const { offset, limit } = pagination

        getDataSource(offset, limit)
    }, [pagination])

    return (
        <Table
            rowKey={(row) => row.id}
            loading={loading}
            dataSource={dataSource.results}
            columns={columns}
            pagination={{
                current: pagination.offset + 1,
                pageSizeOptions: [5, 10, 20, 50, 100],
                onChange: (offset, limit) => {
                    setPagination((pagination) => ({
                        offset: pagination.limit !== limit ? 0 : offset - 1,
                        limit,
                    }))
                },
                total: dataSource.count,
                showSizeChanger: true,
            }}
        />
    )
}

export default SharedTable
