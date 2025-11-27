using System.Threading.Tasks;

namespace Application.Common.Interfaces;

public interface IAiService
{
    Task<string> GenerateResponseAsync(string prompt);
}
