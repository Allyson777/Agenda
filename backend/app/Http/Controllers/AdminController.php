<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LocalPublico;
use App\Models\Prefeitura;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{



    //método para mostrar o formulário de criação de locais publicos
    public function create(){
        $prefeituras = Prefeitura::all(); // Obtém todas as prefeituras para exibir no formulário
        return view('admin.create-location', compact('prefeituras'));
    }
    
    //método para armazenar um novo local público

    public function store (Request $request){
        $validated = $request->validate([

            'nome' => 'required|string|max:30',
            'endereco' => 'required|string',
            'prefeitura_id' => 'required|exists:prefeituras,id',

        ]); //fazendo a validação de um novo local
        
        // Criação do novo local público e associação com a prefeitura
        LocalPublico::create([
            'nome' => $validated['nome'],
            'endereco' => $validated['endereco'],
            'prefeitura_id' => $validated['prefeitura_id'],
        ]); 
    

        return redirect()->route('admin.locations.create')->with('success','Local público adicionado com sucesso!');
    }


}

