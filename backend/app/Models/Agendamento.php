<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agendamento extends Model
{
    use HasFactory;

    protected $fillable = [ 

        'cidade', //verifica se a cidade existe no banco de dados
        'espaco', 
        'mes', //mes que será agendado
        'dia', // dia que será agendado o local publico
        'horario', //horário que será agendado
        
    ];

}
