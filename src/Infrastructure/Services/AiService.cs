using Application.Common.Interfaces;
using Microsoft.Extensions.Configuration;
using OpenAI.Chat;
using OpenAI;

namespace Infrastructure.Services;

public class AiService : IAiService
{
    private readonly string _apiKey;
    private readonly string _model;

    public AiService(IConfiguration configuration)
    {
        _apiKey = configuration["OpenAIOptions:ApiKey"];
        _model = configuration["OpenAIOptions:Model"] ?? "gpt-4o-mini";
    }

    public async Task<string> GenerateResponseAsync(string prompt)
    {
        var client = new OpenAIClient(_apiKey);

        var chat = client.Chat.Get(new ChatRequest
        {
            Model = _model,
            Messages = new List<ChatMessage>
            {
                ChatMessage.FromUser(prompt)
            }
        });

        return chat.Value.Choices[0].Message.Content;
    }
}
