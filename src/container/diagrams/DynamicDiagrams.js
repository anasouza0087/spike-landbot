import React, { useEffect, useState } from 'react'
import 'beautiful-react-diagrams/styles.css';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';

const botObj = {
    options: [
        {
            action_type: "send_text",
            action_content: {
                type: "simple_message",
                message: "Olá,\nSeja Bem vindo a MKOm!"
            }
        },
        {
            action_content: {
                time_not_interaction: "",
                invalid_message: "Ops! Opção inválida, por favor digite novamente.",
                initial_message: "Selecione a opção desejada:\n",
                retry_message: "Desculpa não consegui identificar a sua opção, aguarde um momento, nossa equipe já irá atendê-lo.",
                retry: 3,
                not_interaction_action: {
                    action_type: "send_text",
                    action_content: {
                        type: "simple_message",
                        message: "Oi! Você ainda está ai, podemos retomar o atendimento?"
                    }
                },
                retry_content: {
                    action_type: "send_text",
                    action_content: {
                        type: "simple_message",
                        message: "Estou em fase de aprendizado e não consigo resolver todas suas dúvidas. Não consegui identificar sua opção, mas aguarde que nossa equipe já vai atendê-lo."
                    }
                },
                options: [
                    {
                        action_content: {
                            options: [
                                {
                                    action_content: {
                                        type: "sequence",
                                        offline_behavior: null,
                                        attendants_id: [
                                            1360,
                                            753,
                                            2929,
                                            6276,
                                            1361
                                        ]
                                    },
                                    action_type: "attendance_auto_allocation"
                                }
                            ]
                        },
                        position: 1,
                        code: 1,
                        name: "Suporte"
                    },
                    {
                        action_content: {
                            options: [
                                {
                                    action_content: {
                                        chatbot_id: "2172"
                                    },
                                    "action_type": "move_chatbot"
                                }
                            ]
                        },
                        position: 2,
                        code: 2,
                        name: "Comercial"
                    }
                ]
            },
            action_type: "interactive_menu",
        }
    ]
}

const moveChatbotObj = {
    options: [
        {
            "action_content": {
                "type": "simple_message",
                "message": "Boa tarde"
            },
            "action_type": "send_text"
        },
        {
            "action_content": {
                "time_not_interaction": "15",
                "invalid_message": "Ops! Opção inválida, por favor digite novamente.",
                "initial_message": "Esse é um menu de interação",
                "retry_message": "Desculpa não consegui identificar a sua opção, aguarde um momento, nossa equipe já irá atendê-lo.",
                "retry": 3,
                "not_interaction_action": {
                    "action_type": "send_text",
                    "action_content": {
                        "type": "simple_message",
                        "message": "Oi! Você ainda está ai, podemos retomar o atendimento?"
                    }
                },
                "retry_content": {
                    "action_type": "send_text",
                    "action_content": {
                        "type": "simple_message",
                        "message": "Estou em fase de aprendizado e não consigo resolver todas suas dúvidas. Não consegui identificar sua opção, mas aguarde que nossa equipe já vai atendê-lo."
                    }
                },
                "options": [
                    {
                        "action_content": {
                            "options": [
                                {
                                    "action_content": {
                                        "online_message": "",
                                        "offline_message": "OFFLINE",
                                        "attendant_id": "1444"
                                    },
                                    "position": 1,
                                    "code": 2,
                                    "action_type": "change_attendant"
                                }
                            ]
                        },
                        "position": 1,
                        "code": 1,
                        "name": "MKM",
                        "valid_messages": []
                    },
                    {
                        "action_content": {
                            "options": [
                                {
                                    "action_content": {
                                        "type": "simple_message",
                                        "message": "botão 2"
                                    },
                                    "position": 1,
                                    "code": 2,
                                    "action_type": "send_text"
                                }
                            ]
                        },
                        "position": 2,
                        "code": 2,
                        "name": "MKChannels"
                    },
                    {
                        "action_content": {
                            "options": [
                                {
                                    "action_content": {
                                        "type": "simple_message",
                                        "message": "teste"
                                    },
                                    "action_type": "send_text"
                                }
                            ]
                        },
                        "position": 3,
                        "code": 3,
                        "name": "MKWhatsOne"
                    }
                ],
                "message_sub_type": "button"
            },
            "action_type": "interactive_menu"
        }
    ]
}

const initialSchema = createSchema({
    nodes: [
        {
            id: '',
            content: '',
            coordinates: [-100, -100],
            render: ''
        },
    ],
    // links: [
    //     { input: '', output: '' },
    // ]
})

const rhombus = () => {
    return (
        <div
            style={{
                width: 60,
                height: 60,
                border: '2px solid #000',
                transform: 'rotate(45deg)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
            } >
            <b
                style={{
                    transform: 'rotate(-45deg)'
                }}
            >
                {'Decisão'}
            </b>
        </div>
    )
}

const error = (actionName) => {
    if (actionName !== undefined) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: 500,
                justifyContent: 'space-between'
            }}>
                <div
                    style={{
                        width: 60,
                        height: 60,
                        border: '2px solid red',
                        transform: 'rotate(45deg)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: -10,
                    }}
                >
                </div>
                <div
                    style={{
                        width: 260,
                        height: 80,
                        fontSize: 18,
                        backgroundColor: '#dae1e7',
                        textAlign: 'center',
                        border: '0.07rem solid #8795a1',
                        color: '#606f7b',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <b>{actionName}</b>
                </div>
            </div>
        )
    }
}

const rectangle = (actionName) => {
    if (actionName !== undefined) {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div>
                </div>
                <div
                    style={{
                        width: 260,
                        height: 80,
                        fontSize: 18,
                        backgroundColor: '#dae1e7',
                        textAlign: 'center',
                        border: '0.07rem solid #8795a1',
                        color: '#606f7b',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <b>{actionName}</b>
                </div>
            </div>
        )
    }
}

const rectangle2 = (actionName) => {
    if (actionName !== undefined) {
        return (
            <div
                style={{
                    height: 100,
                    width: 400,
                    margin: '200px 800px 0 -460px',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <div
                    style={{
                        width: 260,
                        height: 80,
                        fontSize: 18,
                        backgroundColor: '#dae1e7',
                        textAlign: 'center',
                        border: '0.07rem solid #8795a1',
                        color: '#606f7b',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <b>{actionName}</b>
                </div>
                {actionName === 'move_chatbot' &&
                    <div style={{ marginLeft: 20, cursor: 'pointer' }}>
                        +
                    </div>
                }
            </div>
        )
    }
}

const elipse = (actionName) => {
    return (
        <div
            style={{
                height: 100,
                margin: '120px 0 0 -200px',
            }}>
            <div style={{
                width: 100,
                height: 60,
                textAlign: 'center',
                fontSize: 18,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '0.07rem solid #8795a1',
                borderRadius: '100%',
                color: '#606f7b',
                backgroundColor: '#dae1e7',
            }}>
                <b>{actionName}</b>
            </div>
        </div>
    )
}

const square = (actionName) => {
    if (actionName !== undefined) {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div
                    style={{
                        width: 90,
                        height: 90,
                        fontSize: 18,
                        backgroundColor: 'red',
                        textAlign: 'center',
                        border: '0.07rem solid #fff',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <b>{actionName}</b>
                </div>
            </div>
        )
    }
}

const DynamicDiagrams = () => {
    const [schema] = useSchema(initialSchema);
    const [newSchema, setNewSchema] = useState({})
    const [coordinates, setCoordinates] = useState({ x: 300, y: 20 })

    const generateCoordinates = (addX, addY) => {

        setCoordinates(state => {
            return {
                x: state.x += addX,
                y: state.y += addY
            }
        })
        return [Number(coordinates.x += addX), Number(coordinates.y += addY)]
    }

    const createNewFields2 = () => {
        let newObj = []

        const setNewfields = (options) => {
            options.forEach((opt) => {
                // if (opt.action_type === "send_text") {
                //     const actionName = opt?.action_type
                //     newObj.push({
                //         ...opt,
                //         geometricShape: () => square(actionName),
                //         coordinates: generateCoordinates(0, 0)
                //     })
                // }
                if (opt.action_content.type === 'simple_message') {
                    const actionName = opt?.action_content?.message
                    newObj.push({
                        ...opt,
                        geometricShape: () => rectangle(actionName),
                        coordinates: generateCoordinates(0, 0)
                    })
                }
                if (opt.action_content.initial_message) {
                    const actionName = opt?.action_content?.initial_message
                    newObj.push({
                        ...opt,
                        geometricShape: () => rectangle(actionName),
                        coordinates: generateCoordinates(0, 120)
                    })
                }
                if (opt.action_content.options !== undefined) {
                    if (opt.name) {
                        const actionName = opt.name
                        newObj.push({
                            ...opt,
                            geometricShape: () => elipse(actionName),
                            coordinates: generateCoordinates(120, 0)
                        })
                    }
                }
                if (opt.action_content.options !== undefined) {
                    if (opt.action_content.options[0].action_type) {
                        const actionName = opt.action_content.options[0].action_type
                        newObj.push({
                            ...opt,
                            geometricShape: () => rectangle2(actionName),
                            coordinates: generateCoordinates(200, 0)
                        })
                    }
                }
                //  if (opt.action_content.options !== undefined) {
                //      if (opt.action_content.options[0].action_type === 'move_chatbot') {
                //          const actionName = opt.action_content.options.action_content.type
                //          newObj.push({
                //              ...opt,
                //              geometricShape: () => elipse(actionName),
                //              coordinates: generateCoordinates(0, 100)
                //          })
                //      }
                //  }
                //  if (opt.action_content.invalid_message) {
                //     const actionName = opt?.action_content?.invalid_message
                //     newObj.push({
                //         ...opt,
                //         geometricShape: () => rectangle(actionName),
                //         coordinates: generateCoordinates(0, 120)
                //     })
                // }
                // if (opt.action_content.retry_message) {
                //     const actionName = opt?.action_content?.retry_message
                //     newObj.push({
                //         ...opt,
                //         geometricShape: () => rectangle(actionName),
                //         coordinates: generateCoordinates(0, 120)
                //     })
                //             // }
                //             // if (opt.action_content.retry) {
                //             //     const actionName = opt?.action_content?.retry
                //             //     newObj.push({
                //             //         ...opt,
                //             //         geometricShape: () => rectangle(actionName),
                //             //         coordinates: generateCoordinates(0, 120)
                //             //     })
                //             // }
                //             // if (opt.action_type === "interactive_menu") {
                //             //     const actionName = opt?.action_type
                //             //     newObj.push({
                //             //         ...opt,
                //             //         geometricShape: () => rectangle(actionName),
                //             //         coordinates: generateCoordinates(0, 120)
                //             //     })
                //             // }
                if (opt.action_content.options !== undefined) {
                    if (opt.action_content.options.length > 0) {
                        setNewfields(opt.action_content.options)
                    }
                }
                setNewSchema(newObj)
            })
        }
        setNewfields(botObj.options)
    }

    // const createNewFields3 = () => {
    //     let newObj = []

    //     const setNewfields = (options) => {
    //         options.forEach((opt) => {
    //             // if (opt.action_type === "send_text") {
    //             //     const actionName = opt?.action_type
    //             //     newObj.push({
    //             //         ...opt,
    //             //         geometricShape: () => square(actionName),
    //             //         coordinates: generateCoordinates(0, 120)
    //             //     })
    //             // }
    //             if (opt.action_content.type === 'simple_message') {
    //                 const actionName = opt?.action_content?.message
    //                 newObj.push({
    //                     ...opt,
    //                     geometricShape: () => rectangle(actionName),
    //                     coordinates: generateCoordinates(0, 120)
    //                 })
    //             }
    //             if (opt.action_content.initial_message) {
    //                 const actionName = opt?.action_content?.initial_message
    //                 newObj.push({
    //                     ...opt,
    //                     geometricShape: () => rectangle(actionName),
    //                     coordinates: generateCoordinates(0, 120)
    //                 })
    //             }
    //             if (opt.action_content.options !== undefined) {
    //                 if (opt.name) {
    //                     const actionName = opt.name
    //                     newObj.push({
    //                         ...opt,
    //                         geometricShape: () => elipse(actionName),
    //                         coordinates: generateCoordinates(0, 120)
    //                     })
    //                 }
    //             }
    //             if (opt.action_content.options !== undefined) {
    //                 if (opt.action_content.options[0].action_type) {
    //                     const actionName = opt.action_content.options[0].action_type
    //                     newObj.push({
    //                         ...opt,
    //                         geometricShape: () => rectangle(actionName),
    //                         coordinates: generateCoordinates(0, 120)
    //                     })
    //                 }
    //             }
    //             // if (opt.action_content.options !== undefined) {
    //             //     if (opt.action_type === 'move_chatbot') {
    //             //         const actionName = opt.action_content.options.action_content.type
    //             //         newObj.push({
    //             //             ...opt,
    //             //             geometricShape: () => elipse(actionName),
    //             //             coordinates: generateCoordinates(0, 100)
    //             //         })
    //             //     }
    //             // }
    //             // if (opt.action_content.invalid_message) {
    //             //     const actionName = opt?.action_content?.invalid_message
    //             //     newObj.push({
    //             //         ...opt,
    //             //         geometricShape: () => rectangle(actionName),
    //             //         coordinates: generateCoordinates(0, 120)
    //             //     })
    //             // }
    //             // if (opt.action_content.retry_message) {
    //             //     const actionName = opt?.action_content?.retry_message
    //             //     newObj.push({
    //             //         ...opt,
    //             //         geometricShape: () => rectangle(actionName),
    //             //         coordinates: generateCoordinates(0, 120)
    //             //     })
    //             // }
    //             // if (opt.action_content.retry) {
    //             //     const actionName = opt?.action_content?.retry
    //             //     newObj.push({
    //             //         ...opt,
    //             //         geometricShape: () => rectangle(actionName),
    //             //         coordinates: generateCoordinates(0, 120)
    //             //     })
    //             // }
    //             // if (opt.action_type === "interactive_menu") {
    //             //     const actionName = opt?.action_type
    //             //     newObj.push({
    //             //         ...opt,
    //             //         geometricShape: () => rectangle(actionName),
    //             //         coordinates: generateCoordinates(0, 120)
    //             //     })
    //             // }
    //             if (opt.action_content.options !== undefined) {
    //                 if (opt.action_content.options.length > 0) {
    //                     setNewfields(opt.action_content.options)
    //                 }
    //             }
    //             setNewSchema(newObj)
    //         })
    //     }
    //     setNewfields(moveChatbotObj.options)
    // }

    useEffect(() => {
        createNewFields2()
    }, [])

    useEffect(() => {

        if (newSchema.length > 0) {
            newSchema.map((ns) => {

                initialSchema.nodes.push({
                    id: '',
                    content: '',
                    coordinates: ns.coordinates,
                    render: ns.geometricShape
                })
            })
        }

    }, [newSchema])

    return (
        <div
            style={{ height: 8000, width: 1400, scrollBehavior: 'auto' }}
        >
            <Diagram schema={schema} style={{ backgroundColor: '#fff' }} />
        </div >
    )
}

export default DynamicDiagrams