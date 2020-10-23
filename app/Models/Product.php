<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
        'image'
    ];

    protected $appends = [
        'image_url'
    ];

    const IMAGES_PATH = '/images/pizza/';

    public function carts()
    {
        return $this->belongsToMany('App\Models\Cart', 'carts_products')
            ->using('App\Models\CartProduct')
            ->withPivot('amount', 'price', 'currency')
            ->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function currency()
    {
        return $this->belongsTo('App\Models\Currency');
    }

    public function getImageUrlAttribute()
    {
        return self::IMAGES_PATH . $this->image;
    }


}
