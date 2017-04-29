export class Equation {
    private solution: number;
    private functions: string[];

    constructor(solution: number, functions: string[]){
        this.solution = solution;
        this.functions = functions;
    }

    getSolution(): number{
        return this.solution;
    }

    getFunctions(): string[] {
        return this.functions;
    }
}