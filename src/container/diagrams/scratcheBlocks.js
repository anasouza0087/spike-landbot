import React from "react";
import ScratchBlocks from "scratchblocks-react";


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

const ScratcheBlocks = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '24.5rem',
                width: 600,
                border: '0.07rem solid #dae1e7',
                borderRadius: '0.25rem',
                boxShadow: '0 0.8rem 1rem -0.2rem rgb(0 0 0 / 10%), 0 0.25rem 0.5rem -0.02rem rgb(0 0 0 / 5%)',
            }}
        >

            <ScratchBlocks blockStyle="scratch3">
                {`Mensagem Inicial: ${bot.options[0].action_content.message}`}
            </ScratchBlocks>

            <ScratchBlocks blockStyle="scratch3">
                {bot.options[1].action_content.initial_message}
            </ScratchBlocks>

            <div style={{ display: 'block' }}>

                <div style={{ display: 'inline-flex' }}>

                    <ScratchBlocks blockStyle="scratch3">
                        {bot.options[1].action_content.options[0].position + ' - ' + bot.options[1].action_content.options[0].name}
                    </ScratchBlocks>

                    <ScratchBlocks blockStyle="scratch3" >
                        {`Ação: ${bot.options[1].action_content.options[0].action_content.options[0].action_type}`}
                    </ScratchBlocks>

                </div>

                <br></br>

                <div style={{ display: 'inline-flex' }}>

                    <ScratchBlocks blockStyle="scratch3">
                        {bot.options[1].action_content.options[1].position + ' - ' + bot.options[1].action_content.options[1].name}
                    </ScratchBlocks>

                    <ScratchBlocks blockStyle="scratch3">
                        {`Ação: ${bot.options[1].action_content.options[1].action_content.options[0].action_type}`}
                    </ScratchBlocks>

                    <ScratchBlocks blockStyle="scratch3">
                        {`Chatbot: ${bot.options[1].action_content.options[1].action_content.options[0].action_content.chatbot_id}`}
                    </ScratchBlocks>

                </div>

            </div>

        </div >
    )
}

export default ScratcheBlocks