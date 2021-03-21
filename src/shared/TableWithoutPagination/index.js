/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import { Table } from 'antd'
import qs from 'qs'

import api from '~/services/api'

function SharedTable(props) {
    const [loading, setLoading] = useState(false)

    const [dataSource, setDataSource] = useState({ results: [] })

    const { results, columns, key } = props

    const getDataSource = useCallback(async (results) => {
        console.log(results)

        setLoading(true)
        setDataSource({ results })
        setLoading(false)
    }, [])

    useEffect(() => {
        getDataSource(results)
    }, [results])

    return (
        <Table
            rowKey={(row) => row.id}
            loading={loading}
            dataSource={dataSource.results}
            columns={columns}
            pagination={false}
        />
    )
}

export default SharedTable
