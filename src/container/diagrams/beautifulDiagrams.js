import React from "react";
import 'beautiful-react-diagrams/styles.css';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';

const bot = {
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
                                        chatbot_id: "1229"
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
            action_type: "interactive_menu"
        }
    ]
}

const initialSchema = createSchema({
    nodes: [
        { id: 'node-1', content: bot.options[0].action_content.message, coordinates: [180, 20], },
        { id: 'node-2', content: bot.options[1].action_content.initial_message, coordinates: [190, 80], },
        { id: 'node-3', content: bot.options[1].action_content.options[0].position + ' - ' + bot.options[1].action_content.options[0].name, coordinates: [110, 140], },
        { id: 'node-4', content: `Ação: ${bot.options[1].action_content.options[0].action_content.options[0].action_type}`, coordinates: [40, 200], },
        { id: 'node-5', content: bot.options[1].action_content.options[1].position + ' - ' + bot.options[1].action_content.options[1].name, coordinates: [360, 140], },
        { id: 'node-6', content: `Ação: ${bot.options[1].action_content.options[1].action_content.options[0].action_type}`, coordinates: [380, 220], },
        { id: 'node-7', content: `Chatbot: ${bot.options[1].action_content.options[1].action_content.options[0].action_content.chatbot_id}`, coordinates: [410, 280], },
    ],
     links: [
         { input: 'node-1', output: 'node-2' },
         { input: 'node-2', output: 'node-3' },
         { input: 'node-2', output: 'node-5' },
         { input: 'node-3', output: 'node-4' },
         { input: 'node-5', output: 'node-6' },
         { input: 'node-6', output: 'node-7' },
     ]
});

const BeautifulDiagrams = () => {
    const [schema, { onChange }] = useSchema(initialSchema);

    return (
        <div style={{ height: '24.5rem', width: 600}}>
            <Diagram schema={schema} onChange={onChange} style={{backgroundColor: '#fff' }}/>
        </div>
    )
}

export default BeautifulDiagrams