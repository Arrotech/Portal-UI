import React, {useState, useEffect} from 'react'
import { getUser, getToken } from '../../Utils/Common'

export const Streams = () => {
    const [streams, setStreams] = useState([]);
    const user = getUser()
    const token = getToken()

    useEffect(() => {
        const getStreams = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/streams', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            }).then((response) => response.json())
                .then((data) => {
                    const streamsData = data.data;
                    const streams = streamsData.map((stream) => ({
                        stream_id: stream.stream_id,
                        stream_name: stream.stream_name,
                    }))
                    setStreams(streams)
                })
        }
        getStreams();
    }, [])
    return (
        <table className="units__table">
            <tr>
                <th>Stream Id</th>
                <th>Stream Name</th>
                <th></th>
            </tr>
            {streams.map((stream) => {
                return (
                    <tr key={stream.stream_id}>
                        <td>{stream.stream_id}</td>
                        <td>{stream.stream_name}</td>
                    </tr>
                )
            })}
        </table>
    )
}
